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

            if (lista.some((listItem) => listItem.title === value)) return;

            TarefasService.create({ title: value, isCompleted: false })
                .then((result) => {
                    if (result instanceof ApiExeption) {
                        alert(result.message);
                    } else {
                        setLista((oldLista) => [...oldLista, result]);
                    }
                });



        }

    }, [lista]);

    const handleToggleComplete = useCallback((id: number) => {
        const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
        if (!tarefaToUpdate) return;

        TarefasService.updateById(id, {
            ...tarefaToUpdate,
            isCompleted: !tarefaToUpdate.isCompleted
        })
            .then((result) => {
                if (result instanceof ApiExeption) {
                    alert(result.message);
                } else {
                    setLista(oldLista => {
                        return oldLista.map(oldlisItem => {
                            if (oldlisItem.id === id) return result;
                            return oldlisItem;
                        });
                    });
                }
            });

    }, [lista]);

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
                                handleToggleComplete(lisItem.id)
                            }}
                        />
                        {lisItem.title}

                    </li>;
                })}
            </ul>

        </div>
    );
}