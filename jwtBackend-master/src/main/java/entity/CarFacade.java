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
    
    public void addCar(Vehicles v)
    {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.persist(v);
        em.getTransaction().commit();
        em.close();
        System.out.println("Car has been added");
    }
    
    public void removeCar(Vehicles v)
    {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        
        em.remove(em.find(Vehicles.class, v.getId()));
        em.getTransaction().commit();
        em.close();
        System.out.println("Car has been removed");
    }
    
    public List<Reservation> getAllreservations()
    {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        List<Reservation> reservations = em.createQuery("SELECT r FROM Reservation r").getResultList();
        em.close();
        return reservations;
    }
    
    public static void main(String[] args)
    {
        CarFacade cf = CarFacade.getInstance();
        List<Reservation> reservations = cf.getAllreservations();
        for(Reservation re : reservations)
        {
            System.out.println(re);
        }
        //System.out.println("--" + cf.getCar("e_2020").toString());
        //Vehicles v =   cf.getCar("2010");
        //cf.removeCar(v);
        System.out.println("done");
    }
}
