import thankYouSrc from "@/assets/icon-thank-you.svg"

export const ThankYou = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center px-16">
      <img src={thankYouSrc} className="mb-8" />
      <h1 className="text-marine-blue font-bold text-3xl mb-4">Thank you!</h1>
      <p className="text-cool-gray text-center tracking-tight">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need suport,
        please feel free to email us at support@loremgaming.com
      </p>
    </div>
  )
}
