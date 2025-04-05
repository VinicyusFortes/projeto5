package aor.proj2.backendprojeto2.bean;

import aor.proj2.backendprojeto2.dao.SettingsDao;
import jakarta.ejb.Stateless;
import jakarta.inject.Inject;

@Stateless
public class SettingsBean {
  @Inject
  private SettingsDao settingsDao;


}
