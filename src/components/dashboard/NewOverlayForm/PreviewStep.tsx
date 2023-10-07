import { FormStepHeader } from "./FormStepHeader";

interface PreviewStepProps {};

export function PreviewStep({}: PreviewStepProps) {
  return (
    <>
      <FormStepHeader title="Pré-visualização" description="Consulte uma prévia, antes de finalizá-lo." />
      <figure className='z-10 rounded-md bg-white w-4/6 p-2 shadow-lg ring-4 self-center justify-self-center ring-border aspect-video flex items-center justify-center'>
        <span>PREVIEW</span>
      </figure>
    </>
  );
};
