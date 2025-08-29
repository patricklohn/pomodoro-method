import { Play } from "phosphor-react";
import { HomeContainer } from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import Countdown from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import { HandPalm } from "phosphor-react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { useContext } from "react";

// Aqui, a validação fica centralizada
const newCycleFormvalidationSchema = zod.object({
  task: zod.string().min(4, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo precisa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleFormData = zod.infer<typeof newCycleFormvalidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormvalidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <button type="button" onClick={interruptCurrentCycle}>
            <HandPalm size={24} />
            Interromper
          </button>
        ) : (
          <button type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </button>
        )}
      </form>
    </HomeContainer>
  );
}

export default Home;
