import thankYouSrc from "@/assets/icon-thank-you.svg"

export const ThankYou = () => {
  return (
    <div className="h-full w-full flex md:items-center px-6 md:px-16">
      <div className="bg-white h-fit flex flex-col items-center px-8 py-20 rounded-lg">
        <img src={thankYouSrc} className="mb-8" />
        <h1 className="text-marine-blue font-bold text-3xl mb-4">Thank you!</h1>
        <p className="text-cool-gray text-center tracking-tight">
          Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need suport,
          please feel free to email us at support@loremgaming.com
        </p>
      </div>
    </div>
  )
}
