<template>
    <div v-if="showRegisterModal" class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Registrati</h5>
                    <button type="button" class="btn-close" @click="closeRegisterForm"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="register">
                        <div class="mb-3">
                            <label for="registerName" class="form-label">Nome</label>
                            <input type="text" v-model="registerName" class="form-control" id="registerName"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="registerEmail" class="form-label">Email</label>
                            <input type="email" v-model="registerEmail" class="form-control" id="registerEmail"
                                required>
                        </div>
                        <div class="mb-3">
                            <label for="registerPassword" class="form-label">Password</label>
                            <input type="password" v-model="registerPassword" class="form-control"
                                id="registerPassword" required>
                        </div>
                        <div class="mb-3">
                            <label for="registerPasswordConfirmation" class="form-label">Conferma Password</label>
                            <input type="password" v-model="registerPasswordConfirmation" class="form-control"
                                id="registerPasswordConfirmation" required>
                        </div>
                        <button type="submit" class="btn btn-primary">Registrati</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>