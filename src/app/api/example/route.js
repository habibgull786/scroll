import connectDB from '@/lib/dbConnect';
import Example from '@/models/Example';
import { validateForm } from '@/utils/validate';

export async function POST(req) {
  await connectDB();

  const { title, content } = await req.json();

  if (!title || !content) {
    return Response.json({ error: 'All fields required' }, { status: 400 });
  }

  try {
    const entry = await Example.create({ title, content });
    return Response.json({ success: true, entry }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'DB Error' }, { status: 500 });
  }
}
