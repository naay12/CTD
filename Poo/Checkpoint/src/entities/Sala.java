package entities;

public class sala implements Comparable<sala> {

    private int numSala;
    private int capacidade;

    public sala(int numSala,int capacidade){
        this.numSala = numSala;
        this.capacidade = capacidade;
    }

    public sala(){
    }

    /**
     * Obter número da sala.
     * @return the numSala
     */
    public int getNumSala() {
        return numSala;
    }

    /**
     * Definir número da sala.
     * @param numSala the numSala to set
     */
    public void setNumSala(int numSala) {
        this.numSala = numSala;
    }

    /**
     * Obter status de utilização da sala.
     * @return the status
     */
    public int getcapacidade() {
        return capacidade;
    }

    /**
     * Definir status de utilização da sala.
     * @param capacidade the status to set
     */
    public void setcapacidade(int capacidade) {
        this.capacidade = capacidade;
    }

    @Override
    public int compareTo()
}