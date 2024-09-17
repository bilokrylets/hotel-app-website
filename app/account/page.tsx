import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

type Props = {};
async function Account({}: Props) {
  const session = await auth();
  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, {session?.user?.name}
    </h2>
  );
}
export default Account;
