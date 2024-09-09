export const metadata = {
  title: "Account",
};

type Props = {};
function Account({}: Props) {
  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome $Username
    </h2>
  );
}
export default Account;
