/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author ezl
 */
public class CarFacade
{
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("persistence");
    private static final CarFacade instance = new CarFacade();
    
    private CarFacade(){}
    
    public static CarFacade getInstance(){
        return instance;
    }
    
    public List<Vehicles> getAllCars()
    {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        List<Vehicles> cars = em.createQuery("SELECT v FROM Vehicles v").getResultList();
        em.getTransaction().commit();
        em.close();
        
        return cars;
    }
    
    public Vehicles getCar(String regno)
    {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        List<Vehicles> cars = em.createQuery("SELECT v from Vehicles v WHERE v.regno = '" + regno + "'").getResultList();
        em.getTransaction().commit();
        em.close();
        
        return cars.get(0);
    }
    
    public static void main(String[] args)
    {
        CarFacade cf = CarFacade.getInstance();
        System.out.println("--" + cf.getCar("e_2020").toString());
    }
}
