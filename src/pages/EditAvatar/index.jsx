import { useEffect, useState } from "react";

const EditAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const handleChange = (e) => {
    const file = e.target.files[0];
    setAvatarUrl(URL.createObjectURL(file || ""));
  };
  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatarUrl);
    };
  }, [avatarUrl]);
  return (
    <div className="p-4">
      <h1 className="pb-4">Edit Avatar</h1>
      <label className="inline-block cursor-pointer">
        <input
          id="editAvatar"
          type="file"
          name="avatar"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
        <img
          src={avatarUrl || "./img/avatarProfile.jpg"}
          alt="placeholder"
          className="rounded-full w-50 h-50"
        />
      </label>
      <div>
        <label
          htmlFor="editAvatar"
          className="cursor-pointer mt-4 inline-block ml-4 border-2 p-2"
        >
          Click để chọn ảnh{" "}
        </label>
      </div>
    </div>
  );
};
export default EditAvatar;
