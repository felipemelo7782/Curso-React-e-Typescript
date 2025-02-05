import { useCallback, useEffect, useState } from "react";
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefasService";
import { ApiExeption } from "../../shared/services/api/ApiExeption";


export const Dashboard = () => {
    const [lista, setLista] = useState<ITarefa[]>([]);

    useEffect(() => {
        TarefasService.getAll()
        .then((result) => {
            if (result instanceof ApiExeption) {
                alert(result.message);
            } else {
                setLista(result);
            }
        });
    }, []);

    const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if (e.key === 'Enter') {
            if (e.currentTarget.value.trim().length === 0) return;

            const value = e.currentTarget.value;

            e.currentTarget.value = '';

            setLista((oldLista) => {
                if (oldLista.some((listItem) => listItem.title === value)) return oldLista;
                return [...oldLista,
                {
                    id: oldLista.length,
                    title: value,
                    isCompleted: false,
                }];
            });

        }

    }, []);

    return (
        <div>
            <p>Lista</p>

            <input
                onKeyDown={handleInputKeyDown}
            />

            <p>{lista.filter((listItem) => listItem.isCompleted).length}</p>

            <ul>
                {lista.map((lisItem) => {
                    return <li key={lisItem.id}>
                        <input
                            type="checkbox"
                            checked={lisItem.isCompleted}
                            onChange={() => {
                                setLista(oldLista => {
                                    return oldLista.map(oldlisItem => {
                                        const newisCompleted = oldlisItem.title === lisItem.title
                                        ? !oldlisItem.isCompleted 
                                        : oldlisItem.isCompleted;

                                        return {
                                            ...oldlisItem,
                                            isCompleted: newisCompleted
                                        }
                                    });
                                });
                            }}
                        />
                        {lisItem.title}

                    </li>;
                })}
            </ul>

        </div>
    );
}