"use client";
import { useForm } from "react-hook-form";

type Inputs = {
  phoneNumber: number;
};

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[360px] gap-2"
    >
      <label className="text-text-grey-color" htmlFor="phoneNumber">
        لطفا شماره همراه خود را وارد کنید
      </label>
      <input
        className="p-2 text-lg rounded-lg outline outline-1 outline-grey-color focus:outline-primary-color"
        placeholder="09123456789"
        type="tel"
        id="phoneNumber"
        {...register("phoneNumber", { required: true, min: 11 })}
      />
      {errors.phoneNumber && (
        <span className="text-xs text-error-color">
          شماره تلفن همراه الزامی است
        </span>
      )}
      <br />
      <button
        className="bg-primary-color p-2 rounded-xl text-white-color hover:shadow-lg"
        type="submit"
      >
        تایید
      </button>
    </form>
  );
};

export default AuthForm;
