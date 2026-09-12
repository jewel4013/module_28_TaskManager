import { defineStore } from "pinia";
import { ref } from "vue";
import apiClient from "../services/axiosClients";
import cogoToast from "cogo-toast";
import { useRouter } from "vue-router";


export const useAuthStore = defineStore('auth', () =>{
    const router = useRouter();

    const user = null
    const token = ref(localStorage.getItem('token') || null)


    const register = async (cradentials) => {
        try{
            await apiClient.post('/auth/register', cradentials)
            cogoToast.success('Registration Successful', {
                position: 'bottom-right',
            });
            return true;
        }catch(error){
            if(error.status === 422){
                const errors = error.response.data.messages;
                errors.forEach((msg) => {
                    cogoToast.error(msg, {
                        position: 'bottom-right',
                    });
                })
            }else{
                cogoToast.error('Internal Server Error', {
                    position: 'bottom-right',
                });
            }

            return false;
        }
    }


    return {
        router,
        user,
        token,
        register,
    }
})

