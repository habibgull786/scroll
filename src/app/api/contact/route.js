import dbConnect from '@/lib/dbConnect';
import Contact from '@/models/contact'; // Capital "C" matches the model name

export async function POST(req) {
  await dbConnect();

  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields are required' }, { status: 400 });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return Response.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Error saving contact:', err);
    return Response.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
