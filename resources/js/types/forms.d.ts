import {ChangeEvent} from "react";

export type TChangeElement<TForm> = ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement> & {
    target: {
        name: keyof TForm;
        value: TForm[keyof TForm];
        files?: File | string | undefined; }
}

