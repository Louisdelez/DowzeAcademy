import { Pool } from 'pg';
import 'dotenv/config';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({ connectionString });

// Mapping of question text to linkedTheorySection
const questionToTheoryLink: Record<string, string> = {
  "Quel est le rôle principal d'un jungler ?": "Qu'est-ce qu'un Jungler ?",
  'Quels sont les objectifs majeurs contrôlés par le jungler ?': "Qu'est-ce qu'un Jungler ?",
  'Quel camp donne un buff de régénération de mana ?': 'Buffs',
  'Combien de temps durent les buffs Red et Blue ?': 'Buffs',
  'Dans un Full Clear côté bleu, par quel camp commencez-vous généralement ?': 'Route standard (Full Clear)',
  'Pourquoi le kiting est-il important dans la jungle ?': "Conseils d'optimisation",
  'Quel est le meilleur moment pour ganker une lane ?': 'Quand ganker ?',
  "Qu'est-ce qu'un counter-gank ?": 'Types de ganks',
  'À quelle heure spawn le premier dragon ?': 'Les Dragons',
  "Combien de dragons faut-il pour obtenir l'Âme ?": "L'Âme du Dragon",
  'Quels sont les avantages du buff Baron ?': 'Baron Nashor',
};

async function main() {
  console.log('Updating League of Legends lessons to SLIDES mode...');

  const client = await pool.connect();

  try {
    // Find the LoL pack
    const packResult = await client.query(
      `SELECT id, name FROM "Pack" WHERE name LIKE '%League of Legends%' LIMIT 1`
    );

    if (packResult.rows.length === 0) {
      console.log('League of Legends pack not found');
      return;
    }

    const lolPack = packResult.rows[0];
    console.log(`Found pack: ${lolPack.name}`);

    // Find disciplines in the pack
    const disciplinesResult = await client.query(
      `SELECT id, name FROM "Discipline" WHERE "packId" = $1`,
      [lolPack.id]
    );

    for (const discipline of disciplinesResult.rows) {
      console.log(`  Discipline: ${discipline.name}`);

      // Find modules in the discipline
      const modulesResult = await client.query(
        `SELECT id, name FROM "Module" WHERE "disciplineId" = $1`,
        [discipline.id]
      );

      for (const module of modulesResult.rows) {
        console.log(`    Module: ${module.name}`);

        // Find the lesson
        const lessonResult = await client.query(
          `SELECT id FROM "Lesson" WHERE "moduleId" = $1`,
          [module.id]
        );

        if (lessonResult.rows.length === 0) continue;

        const lesson = lessonResult.rows[0];

        // Update lesson mode to SLIDES
        await client.query(
          `UPDATE "Lesson" SET mode = 'SLIDES' WHERE id = $1`,
          [lesson.id]
        );
        console.log(`      ✓ Lesson mode set to SLIDES`);

        // Find quiz questions
        const questionsResult = await client.query(
          `SELECT id, "questionText" FROM "QuizQuestion" WHERE "lessonId" = $1`,
          [lesson.id]
        );

        // Update quiz questions with linkedTheorySection
        for (const question of questionsResult.rows) {
          const linkedSection = questionToTheoryLink[question.questionText];
          if (linkedSection) {
            await client.query(
              `UPDATE "QuizQuestion" SET "linkedTheorySection" = $1 WHERE id = $2`,
              [linkedSection, question.id]
            );
            console.log(`      ✓ Question linked to: ${linkedSection}`);
          }
        }
      }
    }

    console.log('\nUpdate completed!');
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
