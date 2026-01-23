import { notFound } from 'next/navigation';
import { getModuleWithLesson } from '@/lib/services/content-service';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { ModuleContent } from './ModuleContent';

export const dynamic = 'force-dynamic';

interface ModulePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ModulePageProps) {
  const { id } = await params;
  const module = await getModuleWithLesson(id);
  return {
    title: module?.name || 'Module',
  };
}

export default async function ModulePage({ params }: ModulePageProps) {
  const { id } = await params;
  const module = await getModuleWithLesson(id);

  if (!module || !module.lesson) {
    notFound();
  }

  const breadcrumbItems = [
    {
      label: module.discipline.pack.domain.name,
      href: `/domain/${module.discipline.pack.domain.id}`,
    },
    {
      label: module.discipline.pack.name,
      href: `/pack/${module.discipline.pack.id}`,
    },
    {
      label: module.discipline.name,
      href: `/discipline/${module.discipline.id}`,
    },
    { label: module.name },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
          {module.name}
        </h1>
        {module.description && (
          <p style={{ color: 'var(--color-text-secondary)' }}>{module.description}</p>
        )}
      </div>

      <ModuleContent
        moduleId={module.id}
        moduleName={module.name}
        lesson={{
          id: module.lesson.id,
          theoryContent: module.lesson.theoryContent,
          quizThreshold: module.lesson.quizThreshold,
          practiceType: module.lesson.practiceType,
          practiceInstructions: module.lesson.practiceInstructions,
          practiceTimerDuration: module.lesson.practiceTimerDuration ?? undefined,
          mode: module.lesson.mode,
          // Feature 005: Randomization settings
          shuffleQuestions: module.lesson.shuffleQuestions,
          shuffleAnswers: module.lesson.shuffleAnswers,
          questionsToShow: module.lesson.questionsToShow,
          questions: module.lesson.questions.map((q) => ({
            id: q.id,
            questionText: q.questionText,
            questionType: q.questionType,
            options: q.options as { id: string; text: string }[] | null,
            order: q.order,
            linkedTheorySection: q.linkedTheorySection,
            correctAnswer: q.correctAnswer as string,
            explanation: q.feedback as string | null,
          })),
        }}
      />
    </div>
  );
}
