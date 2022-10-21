public class Circulo {


    private int r;

    public Circulo(int i) {
        this.r = r;
    }



    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public double calcularPerimetro(){
       double A = Math.PI * Math.pow(this.r,2);
       return A;

    }


}