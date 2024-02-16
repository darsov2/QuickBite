package mk.fink.ukim.quickbite.service.impl;

import mk.fink.ukim.quickbite.entites.MenuItem;
import mk.fink.ukim.quickbite.repository.MenuItemRepository;
import mk.fink.ukim.quickbite.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuServiceImpl implements MenuService {

    private final MenuItemRepository menuItemRepository;

    public MenuServiceImpl(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }
    @Override
    public List<MenuItem> findAll() {
        return menuItemRepository.findAll();
    }
}
