import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner"

export function NewNoteCard() {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true);
  const [contentCard, setContentCard] = useState("");

  const handleStartEditor = () => {
    setShouldShowOnBoarding(false);
  };

  const handleContentChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentCard(event.target.value);

    if (event.target.value === "") {
      setShouldShowOnBoarding(true);
    }
  };

  const handleSaveNote = (event: FormEvent) => {
    event.preventDefault();

    console.log(contentCard);

    toast.success('Nota criada com sucesso!')
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md text-left bg-slate-700 p-5 gap-3 outline-none hover:ring-2 hover:ring-slate-500 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />

        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] h-[60vh] bg-slate-700 w-full rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute top-0 right-0 p-1.5 bg-slate-800 text-slate-400 hover:text-slate-300 focus-visible:ring-2 focus-visible:ring-lime-400">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Adicionar nota
              </span>

              {shouldShowOnBoarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece{" "}
                  <button className="text-lime-400 font-medium hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    onClick={handleStartEditor}
                    className="text-lime-400 font-medium hover:underline"
                  >
                    utilize apenas texto
                  </button>
                  .
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={(event) => handleContentChanged(event)}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-500 py-4 text-center text-sm text-lime-950 font-medium hover:bg-lime-400"
            >
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
