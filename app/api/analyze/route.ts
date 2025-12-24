import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { videoUrl, preset } = await request.json();

    if (!videoUrl) {
      return NextResponse.json(
        { error: 'Video URL is required' },
        { status: 400 }
      );
    }

    // Simulate AI analysis with realistic clip generation
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate mock clips based on video analysis
    const clips = [
      {
        id: '1',
        startTime: 45,
        endTime: 75,
        description: 'Epic comeback moment - viewer engagement peaks here with emotional intensity and dramatic music buildup',
        virality: 92,
        captions: [
          'Wait for it...',
          'This is insane!',
          'No way this happened'
        ]
      },
      {
        id: '2',
        startTime: 180,
        endTime: 210,
        description: 'Funny reaction segment - high entertainment value with unexpected twist that drives shares',
        virality: 88,
        captions: [
          'The best part',
          'You won\'t believe this',
          'Plot twist incoming'
        ]
      },
      {
        id: '3',
        startTime: 320,
        endTime: 345,
        description: 'Tutorial highlight - clear value proposition, perfect for educational content and how-to guides',
        virality: 85,
        captions: [
          'Pro tip:',
          'Here\'s the secret',
          'This changed everything'
        ]
      },
      {
        id: '4',
        startTime: 500,
        endTime: 530,
        description: 'Peak action sequence - fast-paced excitement with multiple highlights in quick succession',
        virality: 90,
        captions: [
          'Watch this!',
          'Absolutely crazy',
          'Mind = blown'
        ]
      },
      {
        id: '5',
        startTime: 650,
        endTime: 675,
        description: 'Motivational conclusion - inspiring message that encourages saves and repeat views',
        virality: 86,
        captions: [
          'Remember this',
          'Game changer',
          'Everyone needs to see this'
        ]
      }
    ];

    return NextResponse.json({
      clips,
      preset,
      message: 'Video analyzed successfully'
    });
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze video' },
      { status: 500 }
    );
  }
}
