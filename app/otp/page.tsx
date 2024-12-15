'use client';
import useUserStore from "@/stores/user.stores";
import Image from "next/image";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Toast } from "@/components/toast/toast.component";
import { useRouter } from "next/navigation";

// Define type for OTP fields
type OtpFormData = {
  otp1: string;
  otp2: string;
  otp3: string;
  otp4: string;
};

export default function OtpPage() {
    const email = useUserStore((state) => state.email);
    const router = useRouter();

    const otpFields = ['otp1', 'otp2', 'otp3', 'otp4'] as const;

    const { control, handleSubmit } = useForm<OtpFormData>({
        defaultValues: {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: ''
        }
    });

    const [toastMessage, setToastMessage] = useState<string>("");

    // Type the onSubmitEventHandler to handle OtpFormData
    const onSubmitEventHandler: SubmitHandler<OtpFormData> = (data) => {
        const otp = data.otp1 + data.otp2 + data.otp3 + data.otp4;

        if (otp === '1111') {
            setToastMessage("");  // Clear any previous toast messages
            router.push('/username');
        } else {
            setToastMessage("Invalid OTP. Please try again.");
        }
    };

    return (
        <>
            {toastMessage && <Toast message={toastMessage} />}

            <section className="flex flex-col bg-black min-h-screen p-10 gap-10 items-center justify-center">
                <div className="w-[450px] h-[539px] bg-primary-950 rounded-[20px] shadow-[0px_0px_30px_0px_#0000004D] p-10 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-10">
                        <div className="relative w-full h-full">
                            <Image
                                src={'/icons/envelop.svg'}
                                alt="email"
                                width={60}
                                height={59.98}
                                className="top-[2px] left-[2px]"
                            />
                        </div>
                    </div>

                    <div className="space-y-9 text-center">
                        <h1 className="tracking-[0.02em] leading-[31px] font-inter font-medium text-2xl text-white">
                            Confirm your email
                        </h1>
                        <h2 className="text-[16px] leading-[21px] font-semibold font-inter text-shades-800">
                            Enter the verification code we emailed to
                            <span className="block text-shades-700">
                                {email}
                            </span>
                        </h2>
                    </div>

                    <div className="w-[370px] h-[141px] gap-[20px] my-10 flex flex-col p-0">
                        <form onSubmit={handleSubmit(onSubmitEventHandler)}>
                            <div className="flex flex-row gap-5 mb-[20px]">
                                {otpFields.map((field, index) => (
                                    <Controller
                                        key={index}
                                        control={control}
                                        name={field} // This is now inferred correctly as one of 'otp1' | 'otp2' | 'otp3' | 'otp4'
                                        render={({ field: controllerField }) => (
                                            <input
                                                {...controllerField}
                                                type="text"
                                                maxLength={1}
                                                className="h-[71px] w-1/4 text-2xl text-center border border-solid border-[#363E46] rounded-[10px] bg-primary-950"
                                            />
                                        )}
                                    />
                                ))}
                            </div>

                            <button
                                type="submit"
                                className="text-[16px] font-medium font-inter leading-[26px] mt-[10px] w-full h-[50px] bg-[#232A33] rounded-[10px] flex items-center justify-center px-[12px] py-[3px] gap-[10px] focus:outline-none focus:ring-2 focus:ring-shades-800"
                            >
                                Continue
                            </button>
                        </form>
                    </div>

                    <p className="flex font-inter gap-5 text-center font-normal leading-[21px] text-sm text-shades-800">
                        Didn&apos;t receive code? Resend email (59s)
                    </p>
                </div>
            </section>
        </>
    );
}
