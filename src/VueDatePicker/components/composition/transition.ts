import { computed, inject } from 'vue';
import type { ComputedRef } from 'vue';
import type { ITransition } from '../../interfaces';

export const useTransitions = () => {
    const transitions = inject<ComputedRef<ITransition>>('transitions');

    const transitionName = computed(() => (isOpen: boolean): string => {
        if (transitions?.value) {
            return isOpen ? transitions.value.open : transitions.value.close;
        }
        return '';
    });

    return { transitionName, showTransition: !!transitions?.value };
};
