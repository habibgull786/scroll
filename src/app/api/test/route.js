// /src/app/api/test/route.js
import connectDB from '@/lib/dbConnect';

export async function GET() {
  await connectDB();
  return Response.json({ message: 'Connection OK' });
}
