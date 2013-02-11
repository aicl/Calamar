CREATE TRIGGER Gasto_bd1 BEFORE DELETE ON Gasto
  FOR EACH ROW BEGIN
    update Concepto set Acumulado=Acumulado-old.Valor where Id=old.IdConcepto;
    update Fuente set Salidas=Salidas-old.Valor where Id=old.IdFuente;
  END
