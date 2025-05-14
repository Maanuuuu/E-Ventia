import { useState  } from "react"
import { supabase } from "../services/supabaseClient"

export default function Login() {
    const [email, setEmail] = useState<string>("")
    
    async function signInWithEmail(email:string): Promise<void> {
        try {
            const result = await supabase.auth.signInWithOtp({
            email: email,
            })
            console.log("Sign in result:", result)
        }
        catch (error) {
            console.error("Error signing in with email:", error)
        }
        
    }
    

    const handleSubmit = (e: any) => {
        e.preventDefault()
        signInWithEmail(email)
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input 
                type="email" 
                name="email" 
                placeholder="your@email.com"
                onChange={(e) => setEmail(e.target.value)}
                />
                <button>
                    Send
                </button>
            </form>

        </div>
    )
}