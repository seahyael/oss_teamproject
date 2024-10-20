import '../contents.css';
import "./CreatePlaylist.css";

// import modules
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SketchPicker } from "react-color";

function CreatePlaylist() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      mood: "",
      genre: "",
      favorite: false,
      public: false,
      color: "#fff",
      songs: [],
    },
  });

  //* function that is passed to the handleSubmit function
  const onSubmit = async (data) => {
    // convert form data into json 
    const jsonData = JSON.stringify(data);
    console.log(jsonData);

    // 필요한 경우 jsonData를 서버로 전송하는 코드 추가 가능
    try {
      const response = await axios.post('https://6713c2f7690bf212c75faacf.mockapi.io/playlist', data);
      console.log('Response:', response.data); // 생성된 리소스와 함께 반환된 데이터
    } catch (error) {
      console.error('Error posting data:', error);
    }

    navigate("/home");
  };

  //? uncomment when needed
  // console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="c-container">
      <h3>This is Form page</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/** my form here */}

        <label>Playlist Title</label>
        <input {...register("title")} placeholder="Title" />

        <label>Description</label>
        <textarea
          {...register("description")}
          placeholder="Enter description of your playlist"
        />

        {/** Create Color picking maybe select */}
        <label>Cover Color</label>
        <div>
          <Controller
            name="color"
            control={control}
            defaultValue="#fff"
            render={({ field }) => (
              <SketchPicker
                color={field.value}
                onChangeComplete={(color) => field.onChange(color.hex)}
              />
            )}
          />
        </div>

        <label>Mood of the playlist</label>
        <select id="mood" {...register("mood", { required: true })}>
          <option value="">-- Select a Mood --</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="energetic">Energetic</option>
          <option value="calm">Calm</option>
          <option value="romantic">Romantic</option>
          <option value="melancholic">Melancholic</option>
          <option value="exciting">Exciting</option>
          <option value="chill">Chill</option>
          <option value="angry">Angry</option>
          <option value="upbeat">Upbeat</option>
        </select>

        <label>Genre</label>
        <select id="genre" {...register("genre", { required: true })}>
          <option value="">-- Select a Genre --</option>
          <option value="pop">Pop</option>
          <option value="rock">Rock</option>
          <option value="hiphop">Hip-Hop</option>
          <option value="jazz">Jazz</option>
          <option value="classical">Classical</option>
          <option value="edm">EDM (Electronic Dance Music)</option>
          <option value="country">Country</option>
          <option value="reggae">Reggae</option>
          <option value="blues">Blues</option>
          <option value="metal">Metal</option>
        </select>

        <label>favorite</label>
        <input type="checkbox" {...register("favorite")} />

        <label>Public</label>
        <input type="checkbox" {...register("public")} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CreatePlaylist;
