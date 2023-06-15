type ModalLayoutProps = {
  children: React.ReactNode;
};

export default function ModalLayout({
  children,
}: ModalLayoutProps): JSX.Element {
  return <div className="modal-layout">{children}</div>;
}
