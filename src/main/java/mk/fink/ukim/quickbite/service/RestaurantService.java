package mk.fink.ukim.quickbite.service;

import mk.fink.ukim.quickbite.entites.Restaurants;

import java.util.List;
import java.util.Optional;

public interface RestaurantService {
    List<Restaurants> findAllRestaurants();
    Optional<Restaurants> saveRestaurant(String city, String zipCode, String address, String description, Double longitude, Double latitude, Long id);
    Optional<Restaurants> findById(Long id);
    void deleteById(Long id);
}
