'use client';
import SsoIconComponents from "@/components/sso-icons/SsoIconComponents";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from "yup";
import useUserStore from "@/stores/user.stores";

// Define the type for the form data
type UserInputFormData = {
  email: string;
};

// Validation Schema using Yup
const userInputDTO = Yup.object({
  email: Yup.string().email('Please enter a valid email address').required('Email is compulsory'),
});

export default function Home() {
  const router = useRouter();
  const setEmail = useUserStore((state) => state.setEmail);

  // Use `useForm` with the `UserInputFormData` type and `yupResolver`
  const { control, handleSubmit } = useForm<UserInputFormData>({
    resolver: yupResolver(userInputDTO)
  });

  // Handle form submission with strongly typed data
  const onSubmitEventHandler: SubmitHandler<UserInputFormData> = (data) => {
    setEmail(data.email);
    router.push("/otp");
  };

  const ssoClickHandler = () => {
    console.log("SSO Clicked");
  };

  return (
    <section className="flex flex-col bg-black min-h-screen p-10 gap-6 items-center justify-center">
      <div className="w-[450px] h-[539px] bg-primary-950 rounded-[20px] shadow-[0px_0px_30px_0px_#0000004D] p-10 flex flex-col items-center">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-5">
          <Image width={36} height={35} src='/logo.svg' alt="MusicGPT Logo" />
        </div>

        {/* Heading Section */}
        <div className="space-y-6 text-center">
          <h1 className="tracking-[0.02em] leading-[31px] font-inter font-medium text-2xl text-white">
            Welcome to MusicGPT
          </h1>
          <h2 className="text-[16px] leading-[21px] font-medium font-inter text-shades-800">
            Sign up or log in to your existing account.
          </h2>
        </div>

        {/* Social Icons */}
        <div className="w-[370px] gap-[20px] py-10 flex flex-col justify-center">
          <div className="w-full h-[50px] flex justify-center gap-[10px]">
            {['apple', 'google', 'discord', 'facebook'].map((platform) => (
              <SsoIconComponents
                key={platform}
                href="#"
                className="flex justify-center items-center w-1/4 py-[15px] px-0 rounded-[10px] border border-[#363E46]"
                onClickHandler={ssoClickHandler}
              >
                <Image
                  width={20}
                  height={20}
                  src={`/icons/${platform}-icon.png`}
                  alt={`${platform} logo`}
                />
              </SsoIconComponents>
            ))}
          </div>
        </div>

        {/* Or Separator */}
        <div className="flex items-center justify-center gap-2 pb-5 w-[370px] h-[21px]">
          <span className="flex-1 border-t border-[#363E46]"></span>
          <span className="text-[16px] leading-[21px] font-normal text-[#363E46]">Or</span>
          <span className="flex-1 border-t border-[#363E46]"></span>
        </div>

        {/* Form Section */}
        <div className="grid gap-5 w-[370px]">
          <form onSubmit={handleSubmit(onSubmitEventHandler)}>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field, formState: { errors } }) => (
                <>
                  <input
                    {...field}
                    type="text"
                    className="w-full h-[50px] bg-primary-950 border border-[#363E46] rounded-[10px] box-border px-4 focus:outline-none focus:border-shades-800 focus:ring-1 focus:ring-shades-800 font-inter text-base font-normal text-left mb-[10px]"
                    placeholder="Email"
                  />
                  {errors?.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                </>
              )}
            />

            <button
              type="submit"
              className="text-[16px] font-medium font-inter leading-[26px] mt-[10px] w-full h-[50px] bg-[#232A33] rounded-[10px] flex items-center justify-center px-[12px] py-[3px] gap-[10px] focus:outline-none focus:ring-2 focus:ring-shades-800"
            >
              Continue
            </button>
          </form>
        </div>

        {/* Terms and Privacy */}
        <p className="flex my-10 font-inter gap-5 text-center font-medium leading-[21px] text-sm text-shades-800">
          By continuing, you agree to our Terms & Privacy
        </p>

      </div>
    </section>
  );
}
