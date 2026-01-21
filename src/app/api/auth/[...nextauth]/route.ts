import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth/learner-auth';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
