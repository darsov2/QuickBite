package mk.fink.ukim.quickbite.service;

import mk.fink.ukim.quickbite.entites.RestaurantTable;

import java.util.Optional;

public interface TableService {
    public Optional<RestaurantTable> saveTable(Long id, String description, Long restaurantId);
    void deleteById(Long id);
}
