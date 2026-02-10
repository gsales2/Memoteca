const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch('http://localhost:3000/pensamentos')
            return response.json()
        }
        catch {
            alert('Erro ao buscar pensamentos')
            throw error
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`)
            return response.json()
        }
        catch {
            alert('Erro ao buscar pensamento')
            throw error
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await fetch('http://localhost:3000/pensamentos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return response.json()
        }
        catch {
            alert('Erro ao salvar pensamentos')
            throw error
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pensamento)
            })
            return response.json()
        }
        catch {
            alert('Erro ao editar pensamento')
            throw error
        }
    },

    async excluirPensamento(id) {
        try {
            const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
                method: "DELETE",
        })
        }
        catch {
            alert('Erro ao excluir o pensamento')
            throw error
        }
    }
}

export default api;