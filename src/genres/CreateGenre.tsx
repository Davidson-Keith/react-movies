import GenreForm from "./GenreForm";

export default function CreateGenre() {
  // const navigate = useNavigate();
  return (
    <>
      <h3>Create Genre</h3>
      <GenreForm
        model={{name: ''}}
        onSubmit={async (values) => {
          await new Promise(r => setTimeout(r, 500));
          console.log(values);
        }}
      />
    </>
  )
}
