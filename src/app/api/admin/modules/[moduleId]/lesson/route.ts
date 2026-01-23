import { NextResponse } from 'next/server';
import { getModuleById, updateLesson, updateQuizQuestions } from '@/lib/services/admin-service';

interface RouteParams {
  params: Promise<{ moduleId: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { moduleId } = await params;
    const module = await getModuleById(moduleId);

    if (!module) {
      return NextResponse.json({ error: 'Module not found' }, { status: 404 });
    }

    return NextResponse.json({
      module: {
        id: module.id,
        name: module.name,
      },
      lesson: module.lesson,
    });
  } catch (error) {
    console.error('Error fetching lesson:', error);
    return NextResponse.json({ error: 'Failed to fetch lesson' }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { moduleId } = await params;
    const body = await request.json();
    const {
      theoryContent,
      quizThreshold,
      practiceType,
      practiceInstructions,
      practiceTimerDuration,
      questions,
      mode,
      // Feature 005: Randomization settings
      shuffleQuestions,
      shuffleAnswers,
      questionsToShow,
    } = body;

    // Validate required fields
    if (!theoryContent || !practiceType || !practiceInstructions) {
      return NextResponse.json(
        { error: 'Theory, practice type, and practice instructions are required' },
        { status: 400 }
      );
    }

    // Update or create lesson
    const lesson = await updateLesson(moduleId, {
      theoryContent,
      quizThreshold: quizThreshold || 70,
      practiceType,
      practiceInstructions,
      practiceTimerDuration: practiceTimerDuration || 300,
      mode,
      // Feature 005: Randomization settings
      shuffleQuestions,
      shuffleAnswers,
      questionsToShow,
    });

    // Update questions if provided
    if (questions && questions.length > 0) {
      await updateQuizQuestions(lesson.id, questions);
    }

    // Fetch updated module
    const module = await getModuleById(moduleId);

    return NextResponse.json({
      module: { id: module?.id, name: module?.name },
      lesson: module?.lesson,
    });
  } catch (error) {
    console.error('Error updating lesson:', error);
    return NextResponse.json({ error: 'Failed to update lesson' }, { status: 500 });
  }
}
