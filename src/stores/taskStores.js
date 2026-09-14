import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClients";
import cogoToast from "cogo-toast";


export const useTaskStore = defineStore("task", () => {
    const getTasks = async () => {
        try {
            const res = await apiClient.get("/tasks");
            return res.data.data.data;
        } catch (error) {
            cogoToast.error("Internal Server Error", {
                position: "bottom-right",
            });
            return [];
        }
    };

    const createTask = async (taskData) => {
        try {
            await apiClient.post("/tasks", taskData);
            cogoToast.success("Task Created", {
                position: "bottom-right",
            });

            return true;
        } catch (error) {
            if (error.status === 422) {
                const errors = error.response.data.messages;
                errors.forEach((msg) => {
                    cogoToast.error(msg, {
                        position: "bottom-right",
                    });
                });
            } else {
                cogoToast.error("Internal Server Error", {
                    position: "bottom-right",
                });
            }
            return false;
        }
    };




    return {
        getTasks,
        createTask,
    };






});
