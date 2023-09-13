import { serve } from 'inngest/next'

import { inngest } from '@/inngest/client'

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve(inngest, [
  /* your functions will be passed here later! */
])