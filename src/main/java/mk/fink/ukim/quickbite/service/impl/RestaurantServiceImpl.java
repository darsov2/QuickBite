package mk.fink.ukim.quickbite.service.impl;

import mk.fink.ukim.quickbite.entites.Restaurants;
import mk.fink.ukim.quickbite.repository.RestaurantsRepository;
import mk.fink.ukim.quickbite.service.RestaurantService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RestaurantServiceImpl implements RestaurantService {
    private final RestaurantsRepository restaurantsRepository;

    public RestaurantServiceImpl(RestaurantsRepository restaurantsRepository){
        this.restaurantsRepository = restaurantsRepository;
    }

    @Override
    public List<Restaurants> findAllRestaurants(){
        return restaurantsRepository.findAllByOrderByIdAsc();
    }

    @Override
    public Optional<Restaurants> saveRestaurant(String city, String zipCode, String address, String description, Double longitude, Double latitude, Long id){
        Restaurants restaurant = new Restaurants();
        if(id != null)
        {
            restaurant = restaurantsRepository.findById(id).get();
        }
        restaurant.setCity(city);
        restaurant.setAddress(address);
        restaurant.setDescription(description);
        restaurant.setLatitude(latitude);
        restaurant.setLongitude(longitude);
//        Restaurants restaurant = new Restaurants(city, zipCode, address, description, longitude, latitude);
        restaurantsRepository.save(restaurant);
        return Optional.of(restaurant);
    }

    @Override
    public Optional<Restaurants> findById(Long id){
        return restaurantsRepository.findById(id);
    }

    @Override
    public void deleteById(Long id){
        Restaurants restaurants = restaurantsRepository.findById(id).get();
        restaurantsRepository.delete(restaurants);
    }


}
