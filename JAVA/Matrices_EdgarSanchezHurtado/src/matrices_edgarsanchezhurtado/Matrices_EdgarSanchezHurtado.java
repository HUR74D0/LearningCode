/*
 * Program to make matrix operations
*/

package matrices_edgarsanchezhurtado;

import java.io.*;

/**
 *
 * @author Edgar S. Hurtado
 */


public class Matrices_EdgarSanchezHurtado {
    //GLOBAL VARIABLES
        //Constants
    static final int maxMatrices = 100;
    static final int maxMatrixSize = 10;
        //Nº of matrices introduced into matrices vector.
    static int totalMatrices = 0;
        //Vector where the matrices are stored.
    static int matricesVector[][][] = 
            new int[maxMatrices][maxMatrixSize][maxMatrixSize];
        //Vector to know the dimensions of every matrix introduced.
    static int matricesSizes[][]= new int[maxMatrices][2];
    
    //USEFUL FUNCTIONS
    static int intImput(){
        //Function for allow keyboard integer inputs
        BufferedReader dataIn = new BufferedReader
                (new InputStreamReader(System.in));
        int tempInt = 0;
        boolean correctInput = false;
        while(!correctInput){
            try {
                tempInt = Integer.parseInt(dataIn.readLine());
                correctInput = true;
            } catch (Exception e) {
                System.out.println("Bad input, try again");
            }
        }
        return tempInt;
    } 

    //PROGRAM LOGIC
    static void menu() {
        System.out.println("-------------MENU------------");
        System.out.println("");
        System.out.println("1. New Matrix");
        System.out.println("2. View matrix");
        System.out.println("3. Matrix addition");
        System.out.println("4. Matrix substraction");
        System.out.println("5. Matrix product by a number");
        System.out.println("6. Matrix product");
        System.out.println("7. Transposed matrix");
        System.out.println("8. Exit");
        
    }
    static void newMatrix(){
       int rows; 
       int cols;
       int number;
       
       if(totalMatrices < maxMatrices){
            //Fix the matrix dimesion. The values are stored in a global variable
            System.out.print("Nº of rows for the new matrix: ");
            rows = intImput();
            while (rows > maxMatrixSize){
                System.out.println("");
            }
            matricesSizes[totalMatrices][0] = rows;
            System.out.print("Nº of columns for the new matrix: ");
            cols = intImput();
            matricesSizes[totalMatrices][1] = cols;

            //Introduce numbers into the matrix
            for (int row = 0; row < rows; row++) {
                for (int col = 0; col < cols; col++) {
                    System.out.print("Write a number: ");
                    number = intImput();
                    matricesVector[totalMatrices][row][col] = number;
                }   
            }
            totalMatrices++; 
       }
       else{
           System.out.println("You've reached the maximum amount of matrices"
                   + " allowed");
       }
       
    }
    
    static void printMatrix(int matrixIndex){
        int rows = matricesSizes[matrixIndex][0];
        int cols = matricesSizes[matrixIndex][1];
        
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                System.out.print(matricesVector[matrixIndex][row][col] + " ");
            }
            System.out.println("");
            
        }
    }
    
    static void matrixAddition(int matrix1[][], int matrix2[][]  ){
        
    }
    
    //MAIN FUNCTION
    public static void main(String[] args) {
        
        int number;
        int matrix1[][] = {{1, 2},{3, 4}};
        int matrix2[][] = {{3, 4},{1, 2}};
        
        newMatrix();
       
    }

}
