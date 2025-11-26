'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleFormSubmission(values: z.infer<typeof formSchema>) {
  // In a real application, you would process this data:
  // - Send an email
  // - Save to a database
  console.log('Received contact form submission:', values);

  // Simulate a successful submission
  return { success: true, message: 'Form submitted successfully!' };
}
