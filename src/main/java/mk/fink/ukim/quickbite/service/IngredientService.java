package mk.fink.ukim.quickbite.service;

import mk.fink.ukim.quickbite.entites.Ingredient;

import java.util.List;
import java.util.Optional;

public interface IngredientService {
   Optional<Ingredient> saveIngredient(Long id, String name, Double weight, Double kcal, Double singlePrice);

    List<Ingredient> findAll();

    void deleteById(Long id);
}
