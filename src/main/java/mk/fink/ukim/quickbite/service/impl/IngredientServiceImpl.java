package mk.fink.ukim.quickbite.service.impl;

import mk.fink.ukim.quickbite.entites.Ingredient;
import mk.fink.ukim.quickbite.repository.IngredientRepository;
import mk.fink.ukim.quickbite.service.IngredientService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImpl implements IngredientService {
    private final IngredientRepository ingredientRepository;

    public IngredientServiceImpl(IngredientRepository ingredientRepository){
        this.ingredientRepository = ingredientRepository;
    }

    @Override
    public Optional<Ingredient> saveIngredient(Long id, String name, Double weight, Double kcal, Double singlePrice){
        Ingredient ingredient = new Ingredient();
        if(id != null){
           ingredient = ingredientRepository.findById(id).get();
        }

        ingredient.setName(name);
        ingredient.setKcal(kcal);
        ingredient.setWeight(weight);
        ingredient.setSinglePrice(singlePrice);

        ingredientRepository.save(ingredient);
        return Optional.of(ingredient);
    }

    @Override
    public List<Ingredient> findAll() {
        return ingredientRepository.findAll();
    }

    @Override
    public void deleteById(Long id){
        Ingredient ingredient = ingredientRepository.findById(id).get();
        ingredientRepository.delete(ingredient);
    }

}
