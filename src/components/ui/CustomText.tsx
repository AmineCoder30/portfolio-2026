function CustomText({
  textOne,
  textTwo,
}: {
  textOne: string;
  textTwo?: string;
}) {
  return (
    <h2 className="text-[clamp(2.5rem,11vw,4rem)] leading-[1.1] font-bold text-white drop-shadow-lg text-gradient">
      {textOne}
      <br />
      {textTwo && textTwo}
    </h2>
  );
}

export default CustomText;
