type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <main>
        <div className="popup-form">
          <div className="popup-form__wrapper">{children}</div>
        </div>
      </main>
    </div>
  );
}
