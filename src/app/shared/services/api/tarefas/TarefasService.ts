import { Api } from "../ApiConfig";
import { ApiExeption } from "../ApiExeption";

export interface ITarefa {
    id: number;
    title: string;
    isCompleted: boolean;
}

const getAll = async (): Promise<ITarefa[] | ApiExeption> => { 
    try{
        const { data } = await Api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ApiExeption(error.message || 'Erro ao consultar os registros.');
    }
};
const getByiD = async (id: number): Promise<ITarefa | ApiExeption> => { 
    try{
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiExeption(error.message || 'Erro ao consultar o registro.');
    }
};
const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiExeption> => { 
    try{
        const { data } = await Api().post<any>('/tarefas', dataToCreate);
        return data;
    } catch (error: any) {
        return new ApiExeption(error.message || 'Erro ao criar o registro.');
    }
};
const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiExeption> => { 
    try{
        const { data } = await Api().put(`/tarefas/${id}`,dataToUpdate);
        return data;
    } catch (error: any) {
        return new ApiExeption(error.message || 'Erro ao atualizar o registro.');
    }
};
const deleteById = async (id: number): Promise<undefined | ApiExeption> => { 
    try{
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    } catch (error: any) {
        return new ApiExeption(error.message || 'Erro ao deletar registro');
    }
};

export const TarefasService = {
    getAll,
    create,
    getByiD,
    updateById,
    deleteById,
};