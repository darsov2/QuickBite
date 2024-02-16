package mk.fink.ukim.quickbite.service.impl;

import mk.fink.ukim.quickbite.entites.Restaurants;
import mk.fink.ukim.quickbite.entites.RestaurantTable;
import mk.fink.ukim.quickbite.repository.RestaurantsRepository;
import mk.fink.ukim.quickbite.repository.TableRepository;
import mk.fink.ukim.quickbite.service.TableService;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TableServiceImpl implements TableService {
    private final RestaurantsRepository restaurantsRepository;
    private final TableRepository tableRepository;

    public TableServiceImpl(RestaurantsRepository restaurantsRepository, TableRepository tableRepository){
        this.restaurantsRepository = restaurantsRepository;
        this.tableRepository = tableRepository;
    }


    @Override
    public Optional<RestaurantTable> saveTable(Long id, String description, Long restaurantId){
        Restaurants restaurants = restaurantsRepository.findById(restaurantId).get();

        RestaurantTable restaurantTable = new RestaurantTable();
//        description, restaurants

        if(id != null){
            restaurantTable = tableRepository.findById(id).get();
        }
        restaurantTable.setDescription(description);
        restaurantTable.setRestaurants(restaurants);

        tableRepository.save(restaurantTable);
        return Optional.of(restaurantTable);
    }

    @Override
    public void deleteById(Long id){
        RestaurantTable restaurantTable = tableRepository.findById(id).get();
        tableRepository.delete(restaurantTable);

    }
}
