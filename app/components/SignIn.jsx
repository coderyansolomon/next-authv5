import { signIn } from "@/auth"


export function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        className="bg-gray-800 p-6 rounded shadow-md"
        action={async () => {
            "use server"
            await signIn("github")
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-100">Sign In</h2>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in with GitHub
        </button>
      </form>
    </div>
  );
}