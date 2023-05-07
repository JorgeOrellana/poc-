type Props = {
  title: string;
};

const HeaderComponent = ({ title }: Props) => {
  return (
    <>
      <div>{title}</div>
    </>
  );
};

export default HeaderComponent;
