import { Widget } from "@typeform/embed-react";

interface TypeformEmbedProps {
  formId: string;
  height?: number;
  width?: number;
  className?: string;
  children?: React.ReactNode;
}

const TypeformEmbed: React.FC<TypeformEmbedProps> = ({
  formId,
  height = 500,
  width = 700,
  className,
}) => {
  return (
    <div className={className}>
      <Widget
        id={formId}
        style={{ width: `${width}px`, height: `${height}px` }}
        className="my-form"
      />
    </div>
  );
};

export default TypeformEmbed;
