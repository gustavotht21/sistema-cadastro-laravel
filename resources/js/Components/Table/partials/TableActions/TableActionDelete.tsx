import React, {ReactElement, useState} from "react";
import Modal from "@/Components/Modal";
import {useForm} from "@inertiajs/react";
import DangerButton from "@/Components/DangerButton";
import SecondaryButton from "@/Components/SecondaryButton";
import {TLink} from "@/types/routing";

export default function TableActionDelete({
                                              routePost,
                                              message = "Delete",
                                              className = ""
                                          }: {
    routePost: TLink,
    message?: string | ReactElement,
    className?: string;
}) {
    const [confirmingComponentDeletion, setConfirmingComponentDeletion] = useState<boolean>(false);

    const confirmComponentDeletion = (): void => {
        setConfirmingComponentDeletion(true);
    };

    const {delete: destroy} = useForm();

    const closeDeleteModal = (): void => {
        setConfirmingComponentDeletion(false);
        destroy(route(routePost[0], routePost[1]));
    };

    const closeModal = () => {
        setConfirmingComponentDeletion(false);
    };
    return <div>
        <DangerButton
            onClick={confirmComponentDeletion}
            className={className}
        >
            {message}
        </DangerButton>
        <Modal
            show={confirmingComponentDeletion}
            onClose={() => setConfirmingComponentDeletion(false)}
        >
            <form className="p-6 relative flex flex-col justify-center items-center">
                <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    Confirm delete
                </h1>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                    Are you sure that want to delete this item?
                </p>
                <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                    This action cannot be undone.
                </p>
                <div className={"flex w-full justify-around mt-4"}>
                    <SecondaryButton
                        onClick={closeModal}
                    >
                        Cancel
                    </SecondaryButton>

                    <DangerButton
                        onClick={closeDeleteModal}
                    >
                        Delete
                    </DangerButton>
                </div>
            </form>
        </Modal>
    </div>;
}
