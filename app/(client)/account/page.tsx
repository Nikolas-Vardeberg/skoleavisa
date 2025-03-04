import { createClient } from '@/common/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return(
    <div className='bg-green-100'>
        <pre>
            {JSON.stringify(user, undefined, 2)}
        </pre>
    </div>
  )
}